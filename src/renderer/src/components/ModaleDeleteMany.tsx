import { Button } from '@heroui/react'
import { useState } from 'react'
import IconComponent from './IconComponent'
import { FaTrashAlt } from 'react-icons/fa'

const ModaleDelete = ({ ids }: { ids: number[] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = () => {
    // Logique de suppression ici
    console.log("Suppression de l'ID :", ids)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button color="danger" isIconOnly variant="ghost" radius="lg" onClick={() => setIsOpen(true)}>
        <IconComponent Icon={FaTrashAlt} className="text-xl" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Confirmation de suppression</h2>
            <p className="mb-6">Êtes-vous sûr de vouloir supprimer l’éléments ?</p>
            <div className="flex justify-center gap-4">
              <Button color="danger" onClick={handleDelete}>
                Oui, supprimer
              </Button>
              <Button variant="flat" onClick={() => setIsOpen(false)}>
                Annuler
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModaleDelete
