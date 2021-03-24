import express from 'express';
import assert from 'assert';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';
import services  from '../core/services';

export const createApiKey = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        assert(req.body, 'Body is required');
        assert(req.body.api_key, 'api_key is required');

        const { body } = req;

        const apiKeyDTO: ApiKeyDTO = new ApiKeyDTO(body.api_key, true);

        await services.createApiKey(apiKeyDTO);

        return res.status(200).send({ api_key: apiKeyDTO });

    } catch (error) {
        next(error);
    }
};