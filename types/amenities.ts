import React from "react";

export interface AmenitySection {
  title: string;
  features: AmenityFeature[];
  nextIndex?: number;
}

export interface AmenityFeature {
  label: string;
  icon: React.ReactNode;
}
