"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
MagnifyingGlassIcon;

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
