import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import Icon from '@mdi/react';
import {
  mdiSettings as SettingsIcon,
  mdiFacebookBox as FacebookIcon,
  mdiTwitterBox as TwitterIcon,
  mdiGithubBox as GithubIcon,
} from '@mdi/js';
import { Fab, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from '../Wrappers';
import ColorChangeThemePopper from './components/ColorChangeThemePopper';

import EditUser from '../../pages/user/EditUser';

// pages
import Dashboard from '../../pages/dashboard';
import BreadCrumbs from '../../components/BreadCrumbs';

// context
import { useLayoutState } from '../../context/LayoutContext';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

import MessagesFormPage from 'pages/CRUD/Messages/form/MessagesFormPage';
import MessagesTablePage from 'pages/CRUD/Messages/table/MessagesTablePage';
import MessagesViewPage from 'pages/CRUD/Messages/page/MessagesViewPage';

import Chat_roomsFormPage from 'pages/CRUD/Chat_rooms/form/Chat_roomsFormPage';
import Chat_roomsTablePage from 'pages/CRUD/Chat_rooms/table/Chat_roomsTablePage';
import Chat_roomsViewPage from 'pages/CRUD/Chat_rooms/page/Chat_roomsViewPage';

function Layout(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'add-section-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  // global
  let layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <Header history={props.history} />
      <Sidebar />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <BreadCrumbs />
        <Switch>
          <Route path='/admin/dashboard' component={Dashboard} />
          <Route path='/admin/user/edit' component={EditUser} />

          <Route path={'/admin/users'} exact component={UsersTablePage} />
          <Route path={'/admin/users/new'} exact component={UsersFormPage} />
          <Route
            path={'/admin/users/:id/edit'}
            exact
            component={UsersFormPage}
          />
          <Route path={'/admin/users/:id'} exact component={UsersViewPage} />

          <Route path={'/admin/messages'} exact component={MessagesTablePage} />
          <Route
            path={'/admin/messages/new'}
            exact
            component={MessagesFormPage}
          />
          <Route
            path={'/admin/messages/:id/edit'}
            exact
            component={MessagesFormPage}
          />
          <Route
            path={'/admin/messages/:id'}
            exact
            component={MessagesViewPage}
          />

          <Route
            path={'/admin/chat_rooms'}
            exact
            component={Chat_roomsTablePage}
          />
          <Route
            path={'/admin/chat_rooms/new'}
            exact
            component={Chat_roomsFormPage}
          />
          <Route
            path={'/admin/chat_rooms/:id/edit'}
            exact
            component={Chat_roomsFormPage}
          />
          <Route
            path={'/admin/chat_rooms/:id'}
            exact
            component={Chat_roomsViewPage}
          />
        </Switch>
        <Fab
          color='primary'
          aria-label='settings'
          onClick={(e) => handleClick(e)}
          className={classes.changeThemeFab}
          style={{ zIndex: 100 }}
        >
          <Icon path={SettingsIcon} size={1} color='#fff' />
        </Fab>
        <ColorChangeThemePopper id={id} open={open} anchorEl={anchorEl} />
        <Footer>
          <div>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/'}
              target={'_blank'}
              className={classes.link}
            >
              Flatlogic
            </Link>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/about'}
              target={'_blank'}
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/blog'}
              target={'_blank'}
              className={classes.link}
            >
              Blog
            </Link>
          </div>
          <div>
            <Link href={'https://www.facebook.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='facebook'>
                <Icon path={FacebookIcon} size={1} color='#6E6E6E99' />
              </IconButton>
            </Link>
            <Link href={'https://twitter.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='twitter'>
                <Icon path={TwitterIcon} size={1} color='#6E6E6E99' />
              </IconButton>
            </Link>
            <Link href={'https://github.com/flatlogic'} target={'_blank'}>
              <IconButton
                aria-label='github'
                style={{ padding: '12px 0 12px 12px' }}
              >
                <Icon path={GithubIcon} size={1} color='#6E6E6E99' />
              </IconButton>
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default withRouter(connect()(Layout));
