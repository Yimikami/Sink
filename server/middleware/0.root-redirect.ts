export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.pathname === '/') {
    return sendRedirect(event, '/dashboard', 301)
  }
})