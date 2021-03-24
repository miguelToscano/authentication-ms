import express from 'express';
import assert from 'assert';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';
import services  from '../core/services';

export const disableApiKey = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        assert(req.body.key, 'Key must be provided');

        const apiKey: ApiKeyDTO = await services.disableApiKey(req.body.key);

        return res.status(200).send({ apiKey });

    } catch (error) {
        next(error);
    }
};