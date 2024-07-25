import { useState } from "react";
import PageIndicator from "@/components/Page-Indicator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateEventSchema } from "@/schema/createEventSchema";
import { BiPlus } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const inputClass =
  "bg-neutral-100 text-neutral-500 border-0 border-light-grey-100 dark:border-0 dark:bg-deep-gray-50 rounded p-2 outline-none border focus:border-deep-red-100";

const CreateEvent = () => {
  const [image, setImage] = useState<File | null>(null);
  const [speakerInput, setSpeakerInput] = useState<
    { email: string; topic: string }[]
  >([]);

  const handleAddSpeaker = () => {
    setSpeakerInput([...speakerInput, { email: "", topic: "" }]);
  };

  const handleRemoveSpeaker = (index: number) => {
    setSpeakerInput(speakerInput.filter((_, i) => i !== index));
  };

  const handleChangeSpeaker = (index: number, key: string, value: string) => {
    setSpeakerInput(
      speakerInput.map((speaker, i) =>
        i === index ? { ...speaker, [key]: value } : speaker
      )
    );
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventSchema>({
    resolver: yupResolver(CreateEventSchema),
  });

  const onSubmit = (data: CreateEventSchema) => {
    const event = { data, speakers: speakerInput, image: image };
    console.log(event);
  };

  return (
    <div className="flex flex-col gap-8">
      <PageIndicator />
      <div className="flex flex-col gap-8 bg-white dark:bg-transparent md:p-8 rounded-lg dark:text-white">
        <h2 className="text-2xl font-semibold">Event Information</h2>
        <form className="flex flex-col md:flex-row gap-8 [&_label]:text-neutral-500">
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 [&_span]:text-deep-red-100 [&_span]:text-sm">
            <div className="flex flex-col gap-2">
              <label>Event Title</label>
              <input
                type="text"
                className={inputClass}
                {...register("title")}
              />
              <span>{errors?.title?.message}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label>Event Details</label>
              <textarea
                className={`h-32 resize-none ${inputClass}`}
                {...register("details")}
              ></textarea>
              <span>{errors?.details?.message}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label>Date</label>
                <input
                  type="date"
                  className={inputClass}
                  {...register("date")}
                />
                <span>{errors?.date?.message}</span>
              </div>
              <div className="flex flex-col gap-2">
                <label>Time</label>
                <input
                  type="time"
                  className={inputClass}
                  {...register("time")}
                />
                <span>{errors?.time?.message}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Venue / Address</label>
              <input
                type="text"
                className={inputClass}
                {...register("venue")}
              />
              <span>{errors?.venue?.message}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col gap-2">
                <label>Event Type</label>
                <select
                  className={`text-deep-gray-50 py-2.5 ${inputClass}`}
                  {...register("eventType")}
                >
                  <option value="">Select Event Type</option>
                  <option value="concert">Public Event</option>
                  <option value="performance">Private Event</option>
                </select>
                <span>{errors?.eventType?.message}</span>
              </div>
              <div className="flex flex-col gap-2">
                <label>Total Seat</label>
                <input
                  type="number"
                  className={inputClass}
                  {...register("totalSeat")}
                />
                <span>{errors?.totalSeat?.message}</span>
              </div>
            </div>
            <div>
              <input type="file" onChange={(event) => handleImage(event)} />
            </div>
          </div>

          <div className="hidden md:block border-r dark:border-r-deep-gray-50"></div>

          <div className="flex flex-col gap-4">
            <b className="text-2xl">Invite Speaker (optional)</b>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>Speaker Email</label>
              <label>Topic</label>
            </div>
            {speakerInput.map((input, index) => (
              <InputComponent
                handleEmail={(event) =>
                  handleChangeSpeaker(index, "email", event.target.value)
                }
                handleTopic={(event) =>
                  handleChangeSpeaker(index, "topic", event.target.value)
                }
                handleRemoveSpeaker={() => handleRemoveSpeaker(index)}
              />
            ))}
            <div className="text-sm">
              <button
                type="button"
                onClick={handleAddSpeaker}
                className="bg-neutral-100 p-2 rounded-lg text-neutral-500"
              >
                <BiPlus size={20} className="inline-block mr-2" />
                Add Speaker
              </button>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-deep-red-100 text-white py-3 px-5 mt-5 rounded-lg"
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const InputComponent = ({
  handleEmail,
  handleTopic,
  handleRemoveSpeaker,
}: {
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTopic: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveSpeaker: () => void;
}) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <div className="grid grid-cols-2 gap-5">
        <input
          type="email"
          className={inputClass}
          placeholder="tim@gmail.com"
          onChange={handleEmail}
        />
        <input
          type="text"
          className={inputClass}
          placeholder="Time management"
          onChange={handleTopic}
        />
      </div>
      <FaTimes
        size={15}
        onClick={handleRemoveSpeaker}
        className="cursor-pointer text-deep-red-100"
      />
    </div>
  );
};

export default CreateEvent;
