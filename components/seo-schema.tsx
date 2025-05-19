interface SeoSchemaProps {
  schema: Record<string, any>
}

export default function SeoSchema({ schema }: SeoSchemaProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
