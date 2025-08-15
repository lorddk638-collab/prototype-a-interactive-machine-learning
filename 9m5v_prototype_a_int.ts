interface IModelMetadata {
  id: string;
  name: string;
  type: string; // e.g., 'classification', 'regression', etc.
  createdAt: Date;
  updatedAt: Date;
}

interface IPerformanceMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
 aucRoc: number;
  meanSquaredError: number;
}

interface ITrainingData {
  features: string[];
  labels: string[];
  data: { [key: string]: number[] };
}

interface IMLModel {
  id: string;
  metadata: IModelMetadata;
  trainingData: ITrainingData;
  performanceMetrics: IPerformanceMetrics;
  modelVersion: string;
  isDeployed: boolean;
}

interface IMonitorUpdate {
  modelId: string;
  timestamp: Date;
  updates: {
    performanceMetrics: IPerformanceMetrics;
    trainingData: ITrainingData;
  };
}

class InteractiveMLMonitor {
  models: IMLModel[];
  updates: IMonitorUpdate[];

  constructor() {
    this.models = [];
    this.updates = [];
  }

  addModel(model: IMLModel) {
    this.models.push(model);
  }

  updateModel(modelId: string, updates: IMonitorUpdate) {
    this.updates.push(updates);
  }

  getModels(): IMLModel[] {
    return this.models;
  }

  getModelUpdates(modelId: string): IMonitorUpdate[] {
    return this.updates.filter((update) => update.modelId === modelId);
  }
}

export { IModelMetadata, IPerformanceMetrics, ITrainingData, IMLModel, IMonitorUpdate, InteractiveMLMonitor };