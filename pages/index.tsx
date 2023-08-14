import React, { useEffect, useState } from "react";
import AccessibilityNotes from "../components/Notes/NoteAccessibility";
export default function Index() {
  return (
  <div className="p-4 w-full h-full">
    <h2>Pokédex index</h2>
    <AccessibilityNotes />
  </div>
  )
}