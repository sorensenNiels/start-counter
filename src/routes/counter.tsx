import { useRouter, createFileRoute } from '@tanstack/react-router'
import { getCount, updateCount } from '~/fn/counter'

const filePath = 'count.txt'

export const Route = createFileRoute('/counter')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <button
      onClick={() => {
        updateCount({ data: 1 }).then(() => {
          router.invalidate()
        })
      }}
    >
      Add 1 to {state}?
    </button>
  )
}
