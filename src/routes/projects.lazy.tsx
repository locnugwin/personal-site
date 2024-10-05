import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="p-2">
      These are my projects!
    </div>
  )
}
