import subprocess
import logging


class NISClient:
    def __init__(self):
        pass

    def get_all_users(self):
        return self._parse_users(self._get_users_file())
    
    def get_user(self, username):
        users = self.get_all_users()
        for user in users:
            if user['username'] == username:
                return user
        raise ValueError(f"User {username} not found")
    
    def get_group(self, groupname):
        groups = self.get_all_groups()
        for group in groups:
            if group['groupname'] == groupname:
                return group
        raise ValueError(f"Group {groupname} not found")
    
    def find_groups_for_user(self, username):
        groups = self.get_all_groups()
        user_groups = []
        for group in groups:
            if username in group['members']:
                user_groups.append(group)
        return user_groups
    
    def get_all_groups(self):
        return self._parse_groups(self._get_groups_file())

    def _get_users_file(self):
        return subprocess.run(['ypcat', 'passwd'], capture_output=True, encoding='utf8', check=True).stdout.strip()

    def _parse_users(self, users_file):
        userlist = []
        for i in users_file.splitlines():
            usermeta = i.split(':')
            userlist.append({
                'uid': usermeta[2],
                'gid': usermeta[3],
                'username': usermeta[0],
                'name': usermeta[4],
                'home': usermeta[5],
                'shell': usermeta[6],
                'eligible': '(ineligible)' not in usermeta[4].lower(),
            })
        return userlist
    
    def _get_groups_file(self):
        return subprocess.run(['ypcat', 'group'], capture_output=True, encoding='utf8', check=True).stdout.strip()
    
    def _parse_groups(self, groups_file):
        group_list = []
        for i in groups_file.splitlines():
            group_line = i.split(':')
            group_members = []
            if len(group_line) > 3:
                group_members  = group_line[3].split(',')
            group = {'groupname': group_line[0],
                    'gid': group_line[2],
                    'members': [m for m in group_members  if len(m) > 0]}
            if len(group['members']) > 0:
                group_list.append(group)
        return group_list