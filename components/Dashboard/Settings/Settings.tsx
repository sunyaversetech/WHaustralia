import React from "react";
import { BusinessHoursForm } from "./OperatingHours";
import { ABNUpdateForm } from "./UpdateABN";

const Settings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <BusinessHoursForm />
      <ABNUpdateForm />
    </div>
  );
};

export default Settings;
