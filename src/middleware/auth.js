
export default function auth({ next, router }) {
  if (!localStorage.getItem('pin')) {
    return router.push('/');
  }

  return next();
}