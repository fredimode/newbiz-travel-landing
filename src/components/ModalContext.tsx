"use client";

import { createContext, useContext, useState, useCallback } from "react";

type ModalPreset = {
  destino?: string;
  tipoViaje?: string;
};

type ModalContextValue = {
  isOpen: boolean;
  preset: ModalPreset | null;
  openModal: (preset?: ModalPreset) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<ModalPreset | null>(null);

  const openModal = useCallback((p?: ModalPreset) => {
    setPreset(p || null);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPreset(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, preset, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
