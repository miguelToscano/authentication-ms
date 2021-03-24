import express from 'express';
import assert from 'assert';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';
import services  from '../core/services';

export const validateApiKey = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        assert(req.body.key, 'Key must be provided');

        const isValid: boolean = await services.validateApiKey(req.body.key);

        return res.status(200).send({ isValid });

    } catch (error) {
        next(error);
    }
};