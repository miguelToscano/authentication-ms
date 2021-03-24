import express from 'express';
import assert from 'assert';
import ApiKey from '../core/ApiKey';

export const createApiKey = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        assert(req.body, 'Body is required');
        assert(req.body.api_key, 'api_key is required');

        const { body } = req;

        const apiKey: ApiKey = new ApiKey(body.api_key, true);

        return res.status(200).send({ api_key: apiKey });

    } catch (error) {
        next(error);
    }
};