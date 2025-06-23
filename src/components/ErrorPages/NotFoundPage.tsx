import ErrorPage from './ErrorPage';

export default function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      title="Page Not Found"
      message="Sorry, the page you are looking for does not exist."
      image="/assets/icon/404.svg"
    />
  );
}
