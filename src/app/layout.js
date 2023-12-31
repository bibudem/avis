import Link from 'next/link'
import { Box, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import ChecklistIcon from '@mui/icons-material/Checklist'
import SettingsIcon from '@mui/icons-material/Settings'
import SupportIcon from '@mui/icons-material/Support'
import LogoutIcon from '@mui/icons-material/Logout'
import AppBar from '@/components/AppBar'
import { Providers } from './Providers'
import './globals.css'

// const roboto = Roboto({ weight: ['300', '400', '500'], subsets: ['latin'] })
// console.log('roboto: %o', roboto)

const DRAWER_WIDTH = 240

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
]

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
]

export const metadata = {
  title: 'Avis - Les Bibliothèques/UdeM',
  description: 'Generated by create next app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
}
export default function RootLayout({ children }) {

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  return (
    <html lang="fr">
      <body>
        <Providers>
          <AppBar />
          {/* <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="temporary"
            anchor="left"
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer> */}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // mt: ['48px', '56px', '64px'],
              pt: 'calc(40px - 1rem)',
              px: [1.5, 2, 3],
              pb: [1.5, 2, 3],
              maxWidth: 1415,
              ml: 'auto',
              mr: 'auto',
              height: '100%'
            }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}
