---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="text-center mb-12">

  <h2 class="text-4xl font-bold">
    {title}
  </h2>

  {
    description && (
      <p class="mt-4 text-gray-600">
        {description}
      </p>
    )
  }

</div>