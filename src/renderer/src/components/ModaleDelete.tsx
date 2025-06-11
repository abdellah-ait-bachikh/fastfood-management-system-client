import { Button } from '@heroui/react'
import { useState } from 'react'
import IconComponent from './IconComponent'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { TAppDispatch } from '@renderer/lib/types'
import { deleteDay } from '@renderer/redux/apiCall/dayApiCAll'

const ModaleDelete = ({
  id,
  dateFilter,
  page,
  rowsPerPage
}: {
  id: number
  dateFilter: Date | undefined
  page: number | undefined
  rowsPerPage: string | undefined
}) => {
  const dispatch = useDispatch<TAppDispatch>()
  const [selectedId, setSelectedId] = useState<null | number>(null)
  const [loading, setLoading] = useState(false)
  const handleDelete = () => {
    // Logique de suppression ici
    dispatch(
      deleteDay(id, setLoading, { dateFilter, page, rowsPerPage }, () => setSelectedId(null), {
        doCbIsFaled: true
      })
    )
  }

  return (
    <div className="relative">
      <Button
        color="danger"
        isIconOnly
        variant="ghost"
        radius="lg"
        onClick={() => setSelectedId(id)}
        isLoading={selectedId === id && loading}
      >
        <IconComponent Icon={FaTrashAlt} className="text-xl" />
      </Button>

      {selectedId === id && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Confirmation de suppression</h2>
            <p className="mb-6">Êtes-vous sûr de vouloir supprimer l’élément #{id} ?</p>
            <div className="flex justify-center gap-4">
              <Button
                color="danger"
                onClick={handleDelete}
                isLoading={selectedId === id && loading}
              >
                Oui, supprimer
              </Button>
              <Button variant="flat" onClick={() => setSelectedId(null)}>
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
