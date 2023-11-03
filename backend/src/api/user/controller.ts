import { RouteHandler } from "fastify";
import { FetchUserHeaderType, UsernameType } from "@/api/user/models";
import DB from "@/loaders/mongo";

export const handleUserFetch: RouteHandler<{ Headers: FetchUserHeaderType }> =
  async function (request, reply) {
    reply.status(200).send({
      message: "User Data Fetched!",
      userData: reply.locals.user,
      status: true,
    });
  };

export const handleUserProfileFetch: RouteHandler<{ Params: UsernameType }> =
  async function (request, reply) {
    const data = await (await DB())
      .collection("users")
      .findOne({ username: request.params.username });
    if (!data) {
      throw {
        message: "User not found",
        status_code: 404,
      };
    }
    reply.status(200).send({
      message: "User Data Fetched!",
      userData: {
        ...data,
        socials: {
          twitter: "https://twitter.com/hamilbots",
          instagram: "https://www.instagram.com/headout/",
          facebook: "https://kzilla.xyz/ZtaMa",
          youtube:
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus augue a quam molestie, quis blandit justo pellentesque. Nulla auctor, erat sit amet bibendum gravida, ipsum quam condimentum turpis, eget placerat turpis mauris in lacus. Aenean pharetra quam id auctor aliquet. Fusce sed pretium neque. Nunc quis massa ultrices nunc.",
        destinations: [
          { name: "Pondicherry" },
          { name: "Leh & Ladakh" },
          { name: "Pragye" },
          { name: "Auckland, New Zealand" },
          { name: "Colosseum, Rome, Italy" },
        ],
        sessions: [
          {
            enabled: true,
            amount: 200,
            timeslot: 30,
            description:
              "Hey, wanna hangout with me and talk about new cities?",
            name: "Hangout with me",
            id: "xyz",
            next_available: 1699216993000
          },
          {
            enabled: true,
            amount: 1000,
            timeslot: 90,
            description: "Very long discussions?",
            name: "Big one",
            id: "123",
            next_available: 1700080993000
          },
          {
            enabled: true,
            amount: 100,
            timeslot: 10,
            description: "Quick chat and some questions,",
            name: "Quickie",
            id: "abc",
            next_available: 1699648993000
          },
          {
            enabled: false,
            amount: 100,
            timeslot: 30,
            description:
              "Hey, wanna hangout with me and talk about new cities?",
            name: "[disabled] Hangout with me",
            id: "xyz",
            next_available: 1699216993000
          },
        ],
      },
      status: true,
    });
  };
