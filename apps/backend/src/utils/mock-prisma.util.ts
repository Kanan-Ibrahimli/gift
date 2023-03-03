import { PrismaService } from "src/prisma/prisma.service";

export function mockPrisma(prisma: PrismaService, mock: any) {
  for (const key in mock) {
    jest
      .spyOn(prisma[key], "findMany")
      .mockImplementation(() => mock[key].findMany);

    jest
      .spyOn(prisma[key], "findUnique")
      .mockImplementation(() => mock[key].findUnique);

    jest
      .spyOn(prisma[key], "createMany")
      .mockImplementation(() => mock[key].createMany);

    jest
      .spyOn(prisma[key], "create")
      .mockImplementation(() => mock[key].create);

    jest
      .spyOn(prisma[key], "deleteMany")
      .mockImplementation(() => mock[key].deleteMany);

    jest
      .spyOn(prisma[key], "delete")
      .mockImplementation(() => mock[key].delete);

    jest
      .spyOn(prisma[key], "updateMany")
      .mockImplementation(() => mock[key].updateMany);

    jest
      .spyOn(prisma[key], "update")
      .mockImplementation(() => mock[key].update);
  }
}
