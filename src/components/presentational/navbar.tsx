import * as React from "react"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { User, Heart, Camera, Share2 } from "react-feather"

export function Navbar(props: any) {
  return (
    <BottomNavigation value={props.value} showLabels>
      <BottomNavigationAction onClick={props.routes[0]} label="Profile" icon={<User />} />
      <BottomNavigationAction onClick={props.routes[1]} label="Suggestions" icon={<Heart />} />
      <BottomNavigationAction onClick={props.routes[2]} label="Camera" icon={<Camera />} />
      <BottomNavigationAction onClick={props.routes[3]} label="Social" icon={<Share2 />} />
    </BottomNavigation>
  )
}
