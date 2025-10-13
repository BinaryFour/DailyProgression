import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import { Button, Typography } from '@mui/material';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kevin Sung',
  description: 'Hire Me!',
};

const drawerWidth = 240;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box sx={{ display: 'flex' }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant='permanent'
            anchor='left'
          >
            <Toolbar />
            <List>
              {['Home', 'About', 'Tasks'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    href={text === 'Home' ? '/' : text.toLowerCase()}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <Divider /> */}
          </Drawer>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <AppBar sx={{ backgroundColor: 'gray' }} position='static'>
              <Box display={'flex'} sx={{ height: 50 }} p={1}>
                <Button
                  href='http://www.linkedin.com/in/kevin-sung-19448b5a'
                  target='_blank' //Opens new tab
                  rel='noopener noreferrer' //Security measure
                  // startIcon={}
                >
                  LinkedIn Profile
                </Button>
              </Box>
            </AppBar>
            <Box component='main'>{children}</Box>
          </Box>
        </Box>
      </body>
    </html>
  );
}
