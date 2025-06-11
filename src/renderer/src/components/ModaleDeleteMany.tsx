import { Button } from '@heroui/react'
import { useState } from 'react'
import IconComponent from './IconComponent'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { TAppDispatch } from '@renderer/lib/types'
import { deleteDay } from '@renderer/redux/apiCall/dayApiCAll'

const ModaleDeleteMany = ({
  ids,
  dateFilter,
  page,
  rowsPerPage,
  setSelectedItems
}: {
  ids: number[] | []
  dateFilter: Date | undefined
  page: number | undefined
  rowsPerPage: string | undefined
  setSelectedItems: (value: [] | number[]) => void
}) => {
  const dispatch = useDispatch<TAppDispatch>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const handleDelete = () => {
    // Logique de suppression ici
    // dispatch(
    //   deleteDay(id, setLoading, { dateFilter, page, rowsPerPage }, () => setSelectedId(null), {
    //     doCbIsFaled: true
    //   })
    // )
  }

  return (
    <div className="relative">
      <Button
        color="danger"
        isIconOnly
        variant="ghost"
        radius="lg"
        onClick={() => setIsOpen(true)}
        isLoading={isOpen && loading}
      >
        <IconComponent Icon={FaTrashAlt} className="text-xl" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Confirmation de suppression</h2>
            <p className="mb-6">Êtes-vous sûr de vouloir supprimer l’élément #{ids.map(e=>e)} ?</p>
            <div className="flex justify-center gap-4">
              <Button color="danger" onClick={handleDelete} isLoading={isOpen && loading}>
                Oui, supprimer
              </Button>
              <Button
                variant="flat"
                onClick={() => {
                  setIsOpen(false)

                  setSelectedItems([])
                }}
              >
                Annuler
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModaleDeleteMany
