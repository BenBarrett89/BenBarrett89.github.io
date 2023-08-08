import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p className="m-3">Sorry, an unexpected error has occurred.</p>
      <p className="m-10">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">Back home</a>
    </div>
  );
}