import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import {
  Avatar,
  Badge,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography sx={{ display: "flex" }}>
            <TwitterIcon sx={{ marginRight: "0.2rem" }} /> Twitter
          </Typography>
        </div>

        <List>
          <ListItem>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SearchRoundedIcon />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Badge variant="dot" badgeContent={" "} color="primary">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Badge variant="standard" badgeContent={3} color="primary">
                <MailOutlineRoundedIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText>Messages</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BookmarkBorderRoundedIcon />
            </ListItemIcon>
            <ListItemText>Bookmarks</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltRoundedIcon />
            </ListItemIcon>
            <ListItemText>Lists</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonOutlineRoundedIcon />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MoreHorizRoundedIcon />
            </ListItemIcon>
            <ListItemText>More</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CreateRoundedIcon />
            </ListItemIcon>
            <ListItemText>Tweet</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Shafin Murani</ListItemText>
          </ListItem>
          {/* Links */}
        </List>
      </Drawer>
      <div
        style={{
          marginTop: "5rem",
          padding: "2rem",
          width: "100%",
          flex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flexStart" }}>
          <Avatar
            sx={{ color: "action.active", mr: 1, my: 0.5, bgcolor: "gray" }}
            variant="circular"
          >
            S
          </Avatar>
          <TextField
            InputProps={{ disableUnderline: true }}
            fullWidth
            id="input-with-sx"
            placeholder="What's happening?"
            variant="standard"
            multiline
            style={{ marginLeft: "1rem", marginBottom: "2rem" }}
            rows={2}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flexStart",
            marginBottom: "1rem",
          }}
        >
          <Button size="small">
            <InsertPhotoRoundedIcon />
          </Button>
          <Button size="small">
            <GifBoxOutlinedIcon />
          </Button>
          <Button size="small">
            <SentimentVerySatisfiedOutlinedIcon />
          </Button>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <Button variant="contained" sx={{ borderRadius: "3rem" }}>
              Tweet
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "flexStart",
            marginBottom: "1rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flexStart",
              }}
            >
              <Avatar
                sx={{
                  color: "action.active",
                  mr: 1,
                  my: 0.5,
                  bgcolor: "green",
                }}
                variant="circular"
              >
                T
              </Avatar>
              <Typography
                style={{
                  marginLeft: "1rem",
                  alignSelf: "center",
                }}
              >
                The developer
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "light",
                marginTop: "1rem",
                marginBottom: "1rem",
                // width: "80%",
                marginInline: "auto",
                textAlign: "justify",
              }}
            >
              Sounds cool (To compliment my own code I guess)
            </Typography>
            <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button>
                <ChatBubbleOutlineRoundedIcon />
                <Typography>8</Typography>
              </Button>
              <Button>
                <RepeatRoundedIcon />
                <Typography>15</Typography>
              </Button>
              <Button>
                <FavoriteBorderRoundedIcon />
                <Typography>20</Typography>
              </Button>
              <Button>
                <ShareRoundedIcon />
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider />
      </div>
    </Box>
  );
}
