export default {
  name: "The Phantom of the Opera",
  price_min: "$29.00",
  price_max: "$215.00",
  image: {
    src:
      "https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fposter.jpg?1555596324072",
    alt: "The Phantom of the Opera"
  },
  dates: [
    {
      id: 1,
      date: "09/24/2019",
      times: [{ time: "19:00:00", tickets_available: true }]
    },
    {
      id: 2,
      date: "09/25/2019",
      times: [{ time: "20:00:00", tickets_available: false }]
    },
    {
      id: 3,
      date: "09/26/2019",
      times: [
        { time: "14:00:00", tickets_available: true },
        { time: "20:00:00", tickets_available: true }
      ]
    },
    {
      id: 4,
      date: "09/27/2019",
      times: [{ time: "19:00:00", tickets_available: true }]
    },
    {
      id: 5,
      date: "09/28/2019",
      times: [
        { time: "14:00:00", tickets_available: true },
        { time: "20:00:00", tickets_available: false }
      ]
    },
    {
      id: 6,
      date: "09/29/2019",
      times: [
        { time: "14:00:00", tickets_available: true },
        { time: "20:00:00", tickets_available: true }
      ]
    }
  ]
};
