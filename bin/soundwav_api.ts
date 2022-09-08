#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SoundwavApiStack } from '../lib/soundwav_api-stack';

const app = new cdk.App();
new SoundwavApiStack(app, 'SoundwavApiStack');
