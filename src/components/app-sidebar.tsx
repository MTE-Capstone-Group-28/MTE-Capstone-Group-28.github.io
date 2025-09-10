import { Link, useLocation } from 'react-router-dom'
import { Home } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { navigationItems } from '@/lib/navigation'

export function AppSidebar() {
  const location = useLocation()

  const homeItem = navigationItems.find(item => item.title === 'Home')
  const designLogItems = navigationItems.filter(item => item.title !== 'Home')

  return (
    <Sidebar>
      <SidebarContent>
        {homeItem && (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === homeItem.url}
                  >
                    <Link to={homeItem.url}>
                      <Home className="h-4 w-4" />
                      <span>{homeItem.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {designLogItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Design Logs</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {designLogItems.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
