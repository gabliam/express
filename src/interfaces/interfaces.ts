import * as express from 'express';
import { interfaces } from '@gabliam/core';
import { PARAMETER_TYPE } from '../constants';

export type HandlerDecorator = (target: any, key: string, value: any) => void;

export interface ExpressPluginConfig {
  rootPath: string;

  port: number;

  hostname: string;
}

export type MiddlewareConfigurator = (
  ...values: any[]
) => express.RequestHandler | express.RequestHandler[];

export interface MiddlewareDefinition {
  name: string;

  values: any[];
}

/**
 * Config function
 */
export type ConfigFunction = (app: express.Application) => void;

export interface ExpressConfigRegistry extends interfaces.ValueRegistry {
  key: string;
}

export interface ExpressConfig {
  order: number;

  instance: ConfigFunction;
}

export interface ControllerParameterMetadata {
  [methodName: string]: ParameterMetadata[];
}

export interface ParameterMetadata {
  parameterName: string;
  index: number;
  type: PARAMETER_TYPE;
}

export type RouterCreator = () => express.Router;
