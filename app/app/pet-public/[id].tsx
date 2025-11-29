import React from "react";

export default function PetPublicPage({ params }) {
  const { id } = params;

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Página pública de tu mascota</h1>
      <p>Este es el perfil público de la mascota con ID:</p>
      <pre
        style={{
          padding: 12,
          background: "#f0f0f0",
          borderRadius: 8,
          display: "inline-block",
        }}
      >
        {id}
      </pre>

      <p>Muy pronto aquí veremos la información real desde Firestore.</p>
    </div>
  );
}
