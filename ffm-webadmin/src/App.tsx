import * as React from "react";
import {Admin, Resource} from "react-admin";
import PeopleIcon from "@material-ui/icons/Group";
import FlagIcon from "@material-ui/icons/Flag";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import authProvider from "./authProvider/authProvider";
import dataProvider from "./dataProvider/dataProvider";
import {PlayerCreate, PlayerEdit, PlayerList} from "./resources/Players";
import {SponsorCreate, SponsorEdit, SponsorList} from "./resources/Sponsors";
import {NewsCreate, NewsEdit, NewsList} from "./resources/News";

const App = () => (
        <Admin authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} icon={PeopleIcon}/>
            <Resource name="sponsors" list={SponsorList} edit={SponsorEdit} create={SponsorCreate} icon={FlagIcon}/>
            <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} icon={AnnouncementIcon}/>
        </Admin>
);

export default App;
