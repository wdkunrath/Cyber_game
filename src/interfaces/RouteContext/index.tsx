import React from 'react';

export interface IRouteParams {
    match: {
        params: {
            cliente_id: string;
            secret_id: string;
            code: string;
            redirect_uri: string;
        }
    }
}