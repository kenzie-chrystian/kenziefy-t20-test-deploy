import { Router } from "express";
import { musicianController, BandController } from "../controllers";
import { ensure } from "../middlewares";
import { bandPayloadCreateSchema } from "../schemas";
import { bandService, bandInMemoryService, BandService } from "../services";
import { container } from "tsyringe";

export const bandRouter = Router();
container.registerSingleton("BandService", BandService);

const bandController = container.resolve(BandController);
/* Exemplo trazido da documentação (formato YAML [orientado a indentação])
  /pets:
    get:
      description: Returns all pets from the system that the user has access to
      responses:
        '200':
          description: A list of pets.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/pet'
*/

/**
 * @openapi
 * /api/bands:
 *  get:
 *    tags:
 *      - Bandas
 *    summary: Listar bandas
 *    description: Retorna todas as bandas.
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Band'
 *  post:
 *    tags:
 *      - Bandas
 *    summary: Criar uma banda
 *    description: Cria e retorna a banda.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Band'
 *    responses:
 *      201:
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Band'
 *      400:
 *        description: Bad Request
 */
bandRouter.get("", bandController.list);
bandRouter.post(
  "",
  ensure.bodyIsValid(bandPayloadCreateSchema),
  bandController.create
);

// MUSICIANS
bandRouter.post("/:bandId/musicians", musicianController.create);
// bandRouter.get("/:bandId/musicians");
