import express from 'express';
import assert from 'assert';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';
import services  from '../core/services';

export const createApiKey = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const apiKeyDTO: ApiKeyDTO = new ApiKeyDTO();

        await services.createApiKey(apiKeyDTO);

        return res.status(200).send({ apiKey: apiKeyDTO });

    } catch (error) {
        next(error);
    }
};