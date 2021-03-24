import express from 'express';
import * as controllers from '../controllers';

export const bind = (app: express.Application): void => {
    app.get('/health', controllers.checkHealth);
    app.get('/api_keys', controllers.getApiKeys);
    app.post('/api_keys', controllers.createApiKey);
    app.post('/api_keys/validate', controllers.validateApiKey);
    app.delete('/api_keys', controllers.disableApiKey);
};
