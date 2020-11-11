
export default function loggedIn({ next, router }) {
  if (localStorage.getItem('pin')) {
    return router.push('/people');
  }

  return next();
}