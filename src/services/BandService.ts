import { Band, BandPayloadCreate, IBandService } from "../interfaces";
import { prisma } from "../database";
import { bandSchema } from "../schemas";
import { injectable } from "tsyringe";

@injectable()
export class BandService implements IBandService {
  private band = prisma.band;

  public list = async (): Promise<Array<Band>> => {
    const bands = await this.band.findMany();

    return bandSchema.array().parse(bands);
  };

  public create = async (payload: BandPayloadCreate): Promise<Band> => {
    const newBand = await this.band.create({ data: payload });
    console.log(newBand);

    return bandSchema.parse(newBand);
  };
}

export const bandService = new BandService();
