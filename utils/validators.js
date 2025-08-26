import vine from "@vinejs/vine";

export const addSchoolSchema = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100),
    address: vine.string().trim().minLength(5).maxLength(255),
    latitude: vine.number().min(-90).max(90),
    longitude: vine.number().min(-180).max(180)
  })
);
export const listSchoolSchema = vine.compile(
  vine.object({
    latitude: vine.number().min(-90).max(90),
    longitude: vine.number().min(-180).max(180)
  })
);
