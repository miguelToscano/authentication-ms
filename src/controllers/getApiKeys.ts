import express from 'express';
import assert from 'assert';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';
import services  from '../core/services';

export const getApiKeys = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        assert(req.body.key, 'Key must be provided');

        const apiKeys: ApiKeyDTO[] = await services.getApiKeys();

        return res.status(200).send({ apiKeys: apiKeys });

    } catch (error) {
        next(error);
    }
};