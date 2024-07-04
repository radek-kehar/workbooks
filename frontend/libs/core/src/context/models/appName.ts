
export interface AppInfo {
  id: string;
  pathPrefix: string;
}

export const AppEnum: { [key: string]: AppInfo } = {
  SHELL: { id: 'shell', pathPrefix: '/' },
  PROFILE: { id: 'profile', pathPrefix: '/profile' },
} as const;
