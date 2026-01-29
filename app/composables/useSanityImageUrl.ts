import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";


const builder = createImageUrlBuilder({
  projectId: "dudbk6rk",
  dataset: "develop",
})

export function useInputSanityImageUrl() {
  const { projectId, dataset } = useSanity().client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? builder.image(source)
      : null;

  return { urlFor };
}