import history from './history';

const HOME_PAGE = `/home`;
const DASHBOARD = '/dashboard';

const redirect = (path, state) => {
    history.push(path, state);
}

export default {
    redirect: redirect,
    HOME_PAGE: HOME_PAGE,
    DASHBOARD: DASHBOARD,

}

