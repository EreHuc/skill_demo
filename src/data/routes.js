import experiences from './experiences';

const Routes = {
  '/': 'Home',
};

export default experiences.reduce((routes, experience) => {
  routes[`/${experience.id}`] = experience;
  return routes;
}, Routes);
