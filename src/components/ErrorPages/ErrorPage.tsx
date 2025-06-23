import { useRouter } from '@tanstack/react-router';

type ErrorPageProps = {
  code?: number | string;
  title?: string;
  message?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function ErrorPage({
  code,
  title = 'Something went wrong',
  message = 'An unexpected error has occurred.',
  image = '/assets/icon/500.svg',
  children
}: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm text-center">
        {image && <img src={image} alt="Error illustration" className="mx-auto mb-4 max-h-80" />}
        {code && <div className="text-5xl font-bold mb-2">{code}</div>}
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="mb-4 text-gray-600">{message}</p>
        {children}
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => router.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
          <button
            onClick={() => router.navigate({ to: '.' })}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
