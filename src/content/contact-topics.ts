export const contactTopics = [
  { value: "general", label: "General enquiry" },
  { value: "partnership", label: "Partnership or funding" },
  { value: "research", label: "Research collaboration" },
  { value: "volunteer", label: "Volunteering" },
  { value: "media", label: "Media or speaking request" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export function isContactTopic(value: unknown): value is ContactTopic {
  return contactTopics.some((t) => t.value === value);
}

export function topicLabel(value: ContactTopic): string {
  return contactTopics.find((t) => t.value === value)?.label ?? "General enquiry";
}
