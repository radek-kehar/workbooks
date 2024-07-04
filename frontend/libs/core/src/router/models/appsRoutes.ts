type Route = { [key: string]: string };

export const ShellRoute: Route = {
  INDEX: '/workbooks/'
} as const;

export const ProfileRoute: Route = {
  INDEX: '/workbooks/profile/'
} as const;
