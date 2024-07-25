import * as yup from "yup";

export const CreateEventSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  details: yup.string().required("This field is required"),
  date: yup.string().required("This field is required"),
  time: yup.string().required("This field is required"),
  venue: yup.string().required("This field is required"),
  eventType: yup.string().required("This field is required"),
  totalSeat: yup.string(),
});

export type CreateEventSchema = yup.InferType<typeof CreateEventSchema>;
